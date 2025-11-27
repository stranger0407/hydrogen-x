package com.hydrogenx.service;

import com.hydrogenx.dto.UserDTO;
import com.hydrogenx.entity.User;
import com.hydrogenx.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public UserDTO registerUser(UserDTO userDTO) {
        // Check if username already exists
        if (userRepository.existsByUsername(userDTO.getUsername())) {
            throw new IllegalArgumentException("Username already exists!");
        }

        // Check if email already exists
        if (userRepository.existsByEmail(userDTO.getEmail())) {
            throw new IllegalArgumentException("Email already exists!");
        }

        // Validate password match
        if (!userDTO.getPassword().equals(userDTO.getConfirmPassword())) {
            throw new IllegalArgumentException("Passwords do not match!");
        }

        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setConfirmPassword(userDTO.getConfirmPassword());
        user.setCompanyProfile(userDTO.getCompanyProfile());
        user.setWebsite(userDTO.getWebsite());
        user.setBrochure(userDTO.getBrochure());
        user.setCustomerCareContact(userDTO.getCustomerCareContact());
        user.setCustomerType(userDTO.getCustomerType());

        User savedUser = userRepository.save(user);
        return convertToDTO(savedUser);
    }

    public Optional<UserDTO> getUserById(Long id) {
        return userRepository.findById(id).map(this::convertToDTO);
    }

    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public UserDTO updateUser(Long id, UserDTO userDTO) {
        return userRepository.findById(id).map(user -> {
            if (userDTO.getEmail() != null) {
                user.setEmail(userDTO.getEmail());
            }
            if (userDTO.getCompanyProfile() != null) {
                user.setCompanyProfile(userDTO.getCompanyProfile());
            }
            if (userDTO.getWebsite() != null) {
                user.setWebsite(userDTO.getWebsite());
            }
            if (userDTO.getBrochure() != null) {
                user.setBrochure(userDTO.getBrochure());
            }
            if (userDTO.getCustomerCareContact() != null) {
                user.setCustomerCareContact(userDTO.getCustomerCareContact());
            }
            if (userDTO.getCustomerType() != null) {
                user.setCustomerType(userDTO.getCustomerType());
            }
            User updatedUser = userRepository.save(user);
            return convertToDTO(updatedUser);
        }).orElseThrow(() -> new IllegalArgumentException("User not found!"));
    }

    public UserDTO convertToDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());
        dto.setPassword(user.getPassword());
        dto.setConfirmPassword(user.getConfirmPassword());
        dto.setCompanyProfile(user.getCompanyProfile());
        dto.setWebsite(user.getWebsite());
        dto.setBrochure(user.getBrochure());
        dto.setCustomerCareContact(user.getCustomerCareContact());
        dto.setCustomerType(user.getCustomerType());
        dto.setCreatedAt(user.getCreatedAt());
        dto.setUpdatedAt(user.getUpdatedAt());
        return dto;
    }
}
