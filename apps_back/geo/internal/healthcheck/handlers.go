package healthcheck

import "github.com/gin-gonic/gin"

func CheckHealth(g *gin.Context) (string, error) {
	return "ok", nil
}
