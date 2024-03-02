package com.seif.jwt.backend.exeptions;

import org.springframework.http.HttpStatus;

public class AppExeption extends RuntimeException {
    private final HttpStatus httpStatus;
    public AppExeption(String message, HttpStatus httpStatus) {
        super(message);
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }
}
