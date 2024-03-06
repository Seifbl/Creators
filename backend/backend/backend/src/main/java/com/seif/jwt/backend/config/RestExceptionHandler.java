package com.seif.jwt.backend.config;

import com.seif.jwt.backend.dtos.ErrorDto;
import com.seif.jwt.backend.exeptions.AppExeption;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class RestExceptionHandler {
    @ExceptionHandler(value = { AppExeption.class})
    @ResponseBody
    public ResponseEntity<ErrorDto> hundleExeption(AppExeption ex){
        return ResponseEntity.status(ex.getHttpStatus())
                .body(new ErrorDto(ex.getMessage()));
    }
}
