package main

import "fmt"

func split(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return
    /*
    明示的にreturnする値を記述する場合は、変数名ではなく記述した値が優先される
    return 0, 3
    */
}

func main() {
    fmt.Println(split(17))
}
