defmodule ElasticTest do
  use ExUnit.Case
  doctest Elastic
  import Tirexs.HTTP

  test "the truth" do
    assert 1 + 1 == 2
  end

  test "fetch Jane from ElasticSearch " do
    {:ok, status, result} = get("/my_index/users/1")
    expected = %{email: "jane@example.com", name: "Jane"}
    # IO.inspect result._source
    assert status == 200
    assert result._source == expected
  end
end
