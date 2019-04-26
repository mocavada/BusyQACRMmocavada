package com.busyqa.crm.repo;

import com.busyqa.crm.model.UserDto;

public interface UserService {

    UserDto update(UserDto userDto);
    void delete(int id);
}
