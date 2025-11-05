export class RoutesConfig {
  static HOME = '/';
  static SESSIONS = '/expert/sessions';
  static EXPERTS = '/expert/experts';
  static EXPERTS_CATEGORY = '/expert/experts/category';
  static BECOME_EXPERT = '/become-expert';
  static BECOME_EXPERT_FORM = '/become-expert/form';

  static EXPERT_PROFILE(id: string) {
    return `/expert/expert/${id}`;
  }

  static EXPERTS_CATEGORY_BY_ID(id: string) {
    return `/expert/experts/${id}`;
  }

  static BOOKING(expertId: string, sessionId: string) {
    return `/expert/booking/${expertId}/${sessionId}`;
  }
}

export const ROUTES_CONFIG = RoutesConfig;

