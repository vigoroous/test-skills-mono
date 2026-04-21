package config

import (
	"net/http"
	"os"
	"sync"

	"github.com/gin-gonic/gin"
)

func HandleOptions(g *gin.Context) {
	if g.Request.Method == "OPTIONS" {
		g.AbortWithStatus(http.StatusOK)
	} else {
		g.Next()
	}
}

var IsDebug = sync.OnceValue(func() bool {
	return os.Getenv("GIN_MODE") == "debug"
})
