package config

import (
	"github.com/Piloswine1/fizz"
	"github.com/Piloswine1/fizz/openapi"
	"github.com/gin-gonic/gin"
)


func InitFizz(engine *gin.Engine) *fizz.Fizz {
	fizzEngine := fizz.NewFromEngine(engine)
	generator := fizzEngine.Generator()

	generator.SetServers([]*openapi.Server{
		{URL: "http://localhost:8080"},
	})

	info := &openapi.Info{
		Title:       "geo",
		Description: `geo routes.`,
	}
	fizzEngine.GET("/openapi.json", nil, fizzEngine.OpenAPI(info, "json"))
	return fizzEngine
}
