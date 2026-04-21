package config

import (
	"log/slog"
	"os"
	"sync"

	"github.com/lmittmann/tint"
)

func getSlogHandler(level slog.Leveler) slog.Handler {
	if IsDebug() {
		// human-readable
		return tint.NewHandler(os.Stdout, &tint.Options{
			Level: level,
		})
	}
	return slog.NewJSONHandler(os.Stdout, &slog.HandlerOptions{
		Level: level,
	})
}

var _InitLogger = sync.OnceValue(func() *slog.Logger {
	level := slog.LevelInfo

	logger := slog.New(getSlogHandler(level))
	slog.SetDefault(logger)
	return logger
})

func GetLogger() *slog.Logger {
	return _InitLogger()
}
