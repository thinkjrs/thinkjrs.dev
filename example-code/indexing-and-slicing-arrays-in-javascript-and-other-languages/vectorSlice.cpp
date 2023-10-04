/* Copyright Jason R. Stevens, CFA
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/
#include <vector>
#include <iostream>
#include <string>

int main() {
    std::vector<std::string> myArray = {"testing", "array", "indexes"};
    auto myArraySlice = std::vector<std::string>(myArray.begin(), myArray.end() - 1);
    std::cout << myArraySlice[0] << "\n";
}
