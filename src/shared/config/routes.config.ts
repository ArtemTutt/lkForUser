export class RoutesConfig {
  static HOME = '/';
  static SESSIONS = '/sessions';
  static EXPERTS = '/experts';
  static EXPERTS_CATEGORY = '/experts/category';

  static EXPERT_PROFILE(id: string) {
    return `/expert/${id}`;
  }

  static EXPERTS_CATEGORY_BY_ID(id: string) {
    return `/experts/${id}`;
  }

  static BOOKING(expertId: string, sessionId: string) {
    return `/booking/${expertId}/${sessionId}`;
  }
}

export const ROUTES_CONFIG = RoutesConfig;

