package dto

type AddUserReq struct {
	Name string `json:"name" validate:"required"`
	Age  int    `json:"age" validate:"required"`
}
