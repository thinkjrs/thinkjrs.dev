/* Copyright Jason R. Stevens, CFA
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

// slices.go 

package main

import "fmt"

func main() {
	myArray := [3]string{"testing", "array", "indexes"}

	var s []string = myArray[0:1]
	fmt.Println(s)
}
