import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getWeather(city: string): Promise<{ temperature: number; condition: string }> {
    const apiKey = this.configService.get<string>('OPENWEATHER_API_KEY');
    if (!apiKey) {
      throw new Error('OpenWeatherMap API key not configured');
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    try {
      const response = await firstValueFrom(this.httpService.get(url));
      const data = response.data;
      const temperature = data.main.temp;
      const condition = data.weather[0].description;
      return { temperature, condition };
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }
}
