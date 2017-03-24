defmodule Elastic do
  import Tirexs.HTTP

  put("/my_index/users/1", [name: "Jane", email: "jane@example.com"])
  # {:ok, 201,
  #  %{_id: "1", _index: "my_index", _type: "users", _version: 1, created: true}}
end
