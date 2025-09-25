import { HttpInterceptorFn } from '@angular/common/http';
import { getAccessToken } from './storage';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
    const token = getAccessToken(); // Implement this function to retrieve the token from storage
    if (token) {
        req = req.clone({
            setHeaders: {
                Authorization: token,
            },
        });
    }
    return next(req);
};
