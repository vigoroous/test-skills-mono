package utils

import "encoding/json"

type ErrorLine struct {
	Field string `json:"field,omitempty"`
	Line  int    `json:"line"`
	Msg   string `json:"message"`
}

func (e *ErrorLine) Error() string {
	mrsh, err := json.Marshal(e)
	if err != nil {
		panic(err)
	}
	return string(mrsh)
}