export enum LoginProvider {
    email = 'email',
    google = 'google',
    ms = 'ms'
}

export enum OAuth2Provider {
    google = 'google',
    azure = 'azure'
}

export function fromOAuth2Provider(oAuth2Provider: OAuth2Provider): LoginProvider {
    switch (oAuth2Provider) {
        case OAuth2Provider.google:
            return LoginProvider.google;
        case OAuth2Provider.azure:
            return LoginProvider.ms;
        default:
            return LoginProvider.email;
    }
}