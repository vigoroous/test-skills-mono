package users

import (
	"net/http"

	"github.com/Piloswine1/fizz"
	"github.com/Piloswine1/gadgeto/tonic"
)

func RegisterRoutes(g *fizz.RouterGroup) {
	sg := g.Group("/users", "v1/base/users", "users related subgroup")

	sg.POST("/add", []fizz.OperationOption{
		fizz.Summary("Add user"),
	}, tonic.Handler(AddUser, http.StatusOK))
	sg.GET("", []fizz.OperationOption{
		fizz.Summary("Get users"),
	}, tonic.Handler(GetUsers, http.StatusOK))
}
