package users

import (
	"geo/internal/users/dto"
	"geo/internal/users/model"

	"github.com/gin-gonic/gin"
)

func AddUser(g *gin.Context, in *dto.AddUserReq) (string, error) {
	return "ok", nil
}

func GetUsers(g *gin.Context) (*model.UserList, error) {

	mockUsers := []model.User{
		{ID: 1, Name: "Alice", Age: 25},
		{ID: 2, Name: "Bob", Age: 30},
		{ID: 3, Name: "Charlie", Age: 35},
		{ID: 4, Name: "Diana", Age: 28},
		{ID: 5, Name: "Eve", Age: 32},
		{ID: 6, Name: "Frank", Age: 27},
		{ID: 7, Name: "Grace", Age: 29},
		{ID: 8, Name: "Henry", Age: 31},
		{ID: 9, Name: "Ivy", Age: 26},
		{ID: 10, Name: "Jack", Age: 34},
		{ID: 11, Name: "Kevin", Age: 33},
		{ID: 12, Name: "Laura", Age: 24},
		{ID: 13, Name: "Mike", Age: 36},
		{ID: 14, Name: "Nina", Age: 23},
		{ID: 15, Name: "Oscar", Age: 37},
		{ID: 16, Name: "Paula", Age: 22},
		{ID: 17, Name: "Quentin", Age: 38},
		{ID: 18, Name: "Rachel", Age: 21},
		{ID: 19, Name: "Steve", Age: 39},
		{ID: 20, Name: "Tina", Age: 20},
		{ID: 21, Name: "Ulysses", Age: 40},
		{ID: 22, Name: "Vera", Age: 19},
		{ID: 23, Name: "Walter", Age: 41},
		{ID: 24, Name: "Xena", Age: 18},
		{ID: 25, Name: "Yuri", Age: 42},
		{ID: 26, Name: "Zoe", Age: 17},
		{ID: 27, Name: "Adam", Age: 43},
		{ID: 28, Name: "Bella", Age: 16},
		{ID: 29, Name: "Chris", Age: 44},
		{ID: 30, Name: "Donna", Age: 15},
		{ID: 31, Name: "Eric", Age: 45},
		{ID: 32, Name: "Fiona", Age: 14},
		{ID: 33, Name: "George", Age: 46},
		{ID: 34, Name: "Helen", Age: 13},
		{ID: 35, Name: "Ian", Age: 47},
		{ID: 36, Name: "Julia", Age: 12},
		{ID: 37, Name: "Kyle", Age: 48},
		{ID: 38, Name: "Linda", Age: 11},
		{ID: 39, Name: "Mark", Age: 49},
		{ID: 40, Name: "Nora", Age: 10},
	}

	return &model.UserList{
		Items: mockUsers,
		Count: len(mockUsers),
	}, nil
}
