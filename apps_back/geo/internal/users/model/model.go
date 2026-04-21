package model

type User struct {
	ID   int    `json:"id" validate:"required"`
	Name string `json:"name" validate:"required"`
	Age  int    `json:"age" validate:"required"`
}

type UserList struct {
	Items []User `json:"items" validate:"required"`
	Count int    `json:"count" validate:"required"`
}
