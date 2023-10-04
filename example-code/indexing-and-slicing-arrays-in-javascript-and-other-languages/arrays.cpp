/* Copyright Jason R. Stevens, CFA
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/
#include <array>
#include <iostream>

int main() {
    std::array<std::string, 3> myArray = {"testing", "array", "indexes"};
    std::cout << myArray[0] << "\n";
}
