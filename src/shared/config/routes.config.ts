export class RoutesConfig {
  static HOME = '/';
  static SESSIONS = '/sessions';
  static EXPERTS = '/experts';

  static EXPERT_PROFILE(id: string) {
    return `/expert/${id}`;
  }
}

export const ROUTES_CONFIG = RoutesConfig;

