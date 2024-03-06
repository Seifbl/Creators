package com.seif.jwt.backend.services;

import com.seif.jwt.backend.dtos.CredentialsDto;
import com.seif.jwt.backend.dtos.SignUpDto;
import com.seif.jwt.backend.dtos.UserDto;
import com.seif.jwt.backend.entities.User;
import com.seif.jwt.backend.exeptions.AppExeption;
import com.seif.jwt.backend.mappers.UserMapper;
import com.seif.jwt.backend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    public UserDto login(CredentialsDto credentialsDto) {
        User user = userRepository.findByLogin(credentialsDto.login())
                .orElseThrow(() -> new AppExeption("Unkown user", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(credentialsDto.password()),
                user.getPassword())) {
            return userMapper.toUserDto(user);
        }
  throw new AppExeption("Invalid password",HttpStatus.BAD_REQUEST);
    }
public UserDto register(SignUpDto signUpDto){
      Optional<User> oUser = userRepository.findByLogin(signUpDto.login());
      if(oUser.isPresent()){
          throw new AppExeption("Login already exists", HttpStatus.BAD_REQUEST);
      }
  User user =  userMapper.signUpToUser(signUpDto);
      user.setPassword(passwordEncoder.encode(CharBuffer.wrap(signUpDto.password())));
      User savedUser = userRepository.save(user);
      return userMapper.toUserDto(savedUser);

}



    public void delete(long userId) throws Exception {
        userRepository.findById(userId).orElseThrow(() -> new Exception("user not found"));
        userRepository.deleteById(userId);
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public void update(long id, User u) {
        User u1 = userRepository.getById(id);
        System.out.println(u1);
        u.setPassword(u1.getPassword());
        userRepository.save(u);
    }


}
