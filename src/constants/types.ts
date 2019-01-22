export interface BOOK_TYPE {
    id: number;
    title: string;
    author: string;
    image: string;
    price: number;
    rating: number;
}

export interface FILTER_TYPE {
    searchQuery: string;
    filterBy: string;
}

export interface CARD_TYPE {
    items: Array<BOOK_TYPE>;
}

export interface LANGUAGES_TYPE {
    usersLang: string;
}

export interface FINGERPRINT_TYPE {
    fingerPrint: string;
}

export type DISPATCH_TYPE = (arg0: Function) => Object;