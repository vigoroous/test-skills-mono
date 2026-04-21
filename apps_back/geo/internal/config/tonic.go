package config

import (
	"log/slog"

	"geo/internal/utils"

	"github.com/Piloswine1/gadgeto/tonic"
	"github.com/gin-gonic/gin"
	"github.com/juju/errors"
)


func ErrHook(c *gin.Context, e error) (int, interface{}) {
	slog.Error("hndl error", "detail", errors.Details(e))
	code, msg := 500, e.Error()

	if got, ok := errors.AsType[*utils.ErrorLine](e); ok {
		return 400, gin.H{
			"error": got,
		}
	}

	if _, ok := e.(tonic.BindError); ok {
		code, msg = 400, e.Error()
	} else {
		switch {
		case errors.Is(e, errors.BadRequest),
			errors.Is(e, errors.NotValid),
			errors.Is(e, errors.NotSupported),
			errors.Is(e, errors.NotAssigned),
			errors.Is(e, errors.NotProvisioned):
			code, msg = 400, e.Error()
		case errors.Is(e, errors.Forbidden):
			code, msg = 403, e.Error()
		case errors.Is(e, errors.MethodNotAllowed):
			code, msg = 405, e.Error()
		case errors.Is(e, errors.NotFound),
			errors.Is(e, errors.UserNotFound):
			code, msg = 404, e.Error()
		case errors.Is(e, errors.Unauthorized):
			code, msg = 401, e.Error()
		case errors.Is(e, errors.AlreadyExists):
			code, msg = 409, e.Error()
		case errors.Is(e, errors.NotImplemented):
			code, msg = 501, e.Error()
		}
	}

	return code, gin.H{`error`: gin.H{"message": msg}}
}
