package com.ram.crudbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ram.crudbackend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
 