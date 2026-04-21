package internal

import (
	"fmt"

	"log/slog"
	"net/http"

	"geo/internal/config"

	"github.com/Piloswine1/gadgeto/tonic"
	"github.com/gin-gonic/gin"
)

func LaunchHttp() {
	engine := gin.New()

	config.GetLogger()
	engine.Use(config.HandleOptions)

	tonic.SetErrorHook(config.ErrHook)
	fizzEngine := config.InitFizz(engine)

	g := fizzEngine.Group("/v1", "v1", "v1 group")
	CollectRoutes(g)

	addr := ":8080"
	slog.Info("starting",
		"addr", addr)
	srv := &http.Server{
		Addr:    addr,
		Handler: fizzEngine,
	}

	err := srv.ListenAndServe()
	if err != nil {
		fmt.Println(err)
		return
	}
}
