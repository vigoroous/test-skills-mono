package healthcheck

import (
	"net/http"

	"github.com/Piloswine1/fizz"
	"github.com/Piloswine1/gadgeto/tonic"
)

func RegisterRoutes(g *fizz.RouterGroup) {
	sg := g.Group("/health", "v1/base/health", "health related subgroup")

	sg.GET("", []fizz.OperationOption{
		fizz.Summary("Get health"),
	}, tonic.Handler(CheckHealth, http.StatusOK))
}
