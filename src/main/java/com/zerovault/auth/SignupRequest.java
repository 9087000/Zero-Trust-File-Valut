package com.zerovault.auth;
import jakarta.validation.constraints.*;

public record SignupRequest(@NotBlank String username, @NotBlank
@Size(min=6) String password) {}
public record LoginRequest(@NotBlank String username, @NotBlank String
password) {}
public record TokenResponse(String token) {}