package internal

import (
	"geo/internal/healthcheck"
	"geo/internal/users"

	"github.com/Piloswine1/fizz"
)

func CollectRoutes(g *fizz.RouterGroup) {
	healthcheck.RegisterRoutes(g)
	users.RegisterRoutes(g)
}
