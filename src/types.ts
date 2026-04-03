export interface ContentState {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    story: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}

export interface ServiceViewState {
  viewMode: 'list' | 'detail';
  selectedServiceId: string | null;
}

export interface ContentContextType {
  content: ContentState;
  updateContent: (section: keyof ContentState, key: string, value: string) => void;
  updateNestedContent: (section: keyof ContentState, nestedKey: string, key: string, value: string) => void;
  serviceView: ServiceViewState;
  setServiceView: (view: ServiceViewState) => void;
}