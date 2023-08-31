import React, { useState, useEffect } from "react";
import { Row, Form } from "react-bootstrap";
import BG from "../../../../../assets/img/users.jpg";
import Heading from "../../heading";
import PrimaryBtn from "../../../../common/Buttons/PrimaryBtn";
import OutlineBtn from "../../../../common/Buttons/OutlineBtn";
import ToggleSwitch from "../../../../common/ToggleSwitch";
import { Dialog } from "@progress/kendo-react-dialogs";
import DeleteDilog from "../../../../common/DeleteDilog";
import CheckboxBtn from "../../../../common/Buttons/CheckboxBtn";

import NameInput from "../../../../common/InputFeilds/NameInput";
import EmailInput from "../../../../common/InputFeilds/EmailInput";
import CompanyInput from "../../../../common/InputFeilds/CompanyInput";
import AddressInput from "../../../../common/InputFeilds/AddressInput";
import PasswordInput from "../../../../common/InputFeilds/PasswordInput";
import ConfirmPasswordInput from "../../../../common/InputFeilds/ConfirmPasswordInput";
import useFormValidation from "../../../../common/useFormValidation.js";

const Users = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setChecked(event.value);
  };
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const {
    email,
    setEmail,
    validateEmail,
    emailError,
    fname,
    setFName,
    fNameError,
    validateFName,
    lname,
    setLName,
    lNameError,
    validateLName,
    company,
    setCompany,
    companyError,
    validateCompany,
    address,
    setAddress,
    addressError,
    validateAddress,
    password,
    validatePassword,
    passwordError,
    showPassword,
    togglePasswordVisibility,
    confirmPassword,
    confirmPasswordError,
    validateConfirmPassword,
    showConfirmPassword,
    toggleConfirmPasswordVisibility,
  } = useFormValidation();

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  // Add User
  const [visibleAddUser, setVisibleAddUser] = useState(false);
  const toggleDialogAddUser = () => {
    setFName("");
    setLName("");
    setEmail("");
    setCompany("");
    setAddress("");
    setVisibleAddUser(!visibleAddUser);
  };

  const handleAddSubmit = () => {
    const newUser = {
      name: `${fname} ${lname}`,
      email,
      company,
      address,
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    toggleDialogAddUser();
  };

  // Edit User
  const handleEditUser = (index) => {
    setEditingUser(users[index]);

    setFName(users[index].name.split(" ")[0]);
    setLName(users[index].name.split(" ")[1]);
    setEmail(users[index].email);
    setCompany(users[index].company);
    setAddress(users[index].address);
    setVisibleAddUser(true);
  };

  const handleEditSubmit = () => {
    const index = users.findIndex((user) => user === editingUser);

    const updatedUsers = [...users];
    updatedUsers[index] = {
      name: `${fname} ${lname}`,
      email,
      company,
      address,
    };

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setFName("");
    setLName("");
    setEmail("");
    setCompany("");
    setAddress("");

    setEditingUser(null);
    toggleDialogAddUser();
  };

  // Remove User
  const handleRemoveUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [deleteDialogIndex, setDeleteDialogIndex] = useState(null);
  const openDeleteDialog = (index) => {
    setDeleteDialogIndex(index);
    setDeleteDialogVisible(true);
  };

  return (
    <div>
      <Heading image={BG} heading={"Manage Users"} />
      <div className="m-3">
        <div className="shadow-container p-3">
          <div className="py-4 px-2 d-flex justify-content-between align-items-center">
            <h3 className="font-md font-primary font-weight-700 letter-spacing-2">
              Your Users
            </h3>
            <PrimaryBtn
              fontWeight={600}
              text={"Add User"}
              icon={"fa-solid fa-plus"}
              onClick={toggleDialogAddUser}
            />
          </div>
          {users.map((user, index) => (
            <div className="shadow-container m-3" key={index}>
              <div className="p-2 p-sm-3 d-flex justify-content-between align-items-center">
                <h3 className="font-sm font-primary font-weight-500 letter-spacing-2">
                  {user.name}
                </h3>
                <div className="d-flex align-items-center">
                  <p className="font-xs font-primary font-weight-500 letter-spacing-1">
                    Activate:{" "}
                  </p>
                  <div className="ms-1">
                    <ToggleSwitch />
                  </div>
                  <div className="ms-3">
                    <PrimaryBtn
                      fontWeight={600}
                      text={"Edit"}
                      icon={"fa-regular fa-pen-to-square"}
                      onClick={() => handleEditUser(index)}
                    />
                  </div>
                  <div className="ms-2">
                    <OutlineBtn
                      fontWeight={600}
                      text={"Remove"}
                      icon={"fa-solid fa-minus"}
                      onClick={() => openDeleteDialog(index)}
                    />
                  </div>
                </div>
              </div>
              {deleteDialogVisible && deleteDialogIndex === index && (
                <DeleteDilog
                  type={"User"}
                  toggle={() => setDeleteDialogVisible(false)}
                  submit={() => {
                    handleRemoveUser(index);
                    setDeleteDialogVisible(false);
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {visibleAddUser && (
        <Dialog
          title={editingUser ? "Edit User" : "Add User"}
          onClose={toggleDialogAddUser}
        >
          <Form>
            <Row>
              <NameInput
                fvalue={fname}
                defaultFname={editingUser !== null ? fname : ""}
                onChangeF={validateFName}
                fNameError={fNameError}
                lvalue={lname}
                onChangeL={validateLName}
                lNameError={lNameError}
              />
            </Row>
            <Row>
              <EmailInput
                value={email}
                onChange={validateEmail}
                emailError={emailError}
              />
            </Row>
            <Row>
              <CompanyInput
                value={company}
                onChange={validateCompany}
                companyError={companyError}
              />
            </Row>
            <Row>
              <AddressInput
                value={address}
                onChange={validateAddress}
                companyError={addressError}
              />
            </Row>
            {editingUser && isAdmin && (
              <>
                <Row className="mb-4">
                  <CheckboxBtn
                    value={checked}
                    onChange={handleCheckboxChange}
                    label="Change password"
                    defaultChecked={false}
                  />
                </Row>
                {checked && (
                  <>
                    <Row>
                      <PasswordInput
                        value={password}
                        onChange={validatePassword}
                        showPassword={showPassword}
                        togglePassword={togglePasswordVisibility}
                        passwordError={passwordError}
                        label="New Password"
                      />
                    </Row>
                    <Row>
                      <ConfirmPasswordInput
                        value={confirmPassword}
                        onChange={validateConfirmPassword}
                        showPassword={showConfirmPassword}
                        togglePassword={toggleConfirmPasswordVisibility}
                        passwordError={confirmPasswordError}
                      />
                    </Row>
                  </>
                )}
              </>
            )}
            <PrimaryBtn
              text={"Submit"}
              onClick={editingUser ? handleEditSubmit : handleAddSubmit}
            />
          </Form>
        </Dialog>
      )}
    </div>
  );
};

export default Users;
