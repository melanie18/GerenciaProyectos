import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { LoggingHttpInterceptor } from './interceptors/logging-http-interceptor';
import { CoreService } from './core.service';

export const services: any[] = [
  JwtInterceptor,
  LoggingHttpInterceptor,
  CoreService
];

export * from './interceptors/jwt-interceptor';
export * from './interceptors/logging-http-interceptor';
export * from './core.service';
