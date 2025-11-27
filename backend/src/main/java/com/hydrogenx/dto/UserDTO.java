package com.hydrogenx.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private Long id;
    private String username;
    private String email;
    private String password;
    private String confirmPassword;
    private String companyProfile;
    private String website;
    private String brochure;
    private String customerCareContact;
    private String customerType;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
