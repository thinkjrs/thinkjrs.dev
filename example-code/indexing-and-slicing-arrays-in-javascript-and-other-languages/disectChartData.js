/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
/**
 * @description Given a Chart.js label array and a Chart.js data array and an
 * integer length, return an object of those labels and data arrays sliced up
 * to the ending lengths.
 *
 * @param { Array<string | null> }labels string labels to index data
 * @param { Array<string | number | null> } data data to plot
 * @param { number } length length to slice _from the end of each array_
 *
 * @returns an object of sliced labels and data
 */
function disectChartData(labels, data, length) {
  const endLabelSliceIdx = labels.length
  const endDataSliceIdx = data.length
  const startLabelIdx = Math.max(0, endLabelSliceIdx - length)
  const startDataIdx = Math.max(0, endDataSliceIdx - length)
  return {
    labels: labels.slice(startLabelIdx, endLabelSliceIdx),
    data: data.slice(startDataIdx, endDataSliceIdx),
  }
}

// execution code
const myArrayLabels = ['testing', 'array', 'indexes']
const myArrayData = [1.0, 1.1, 1.2]
console.log(JSON.stringify(disectChartData(myArrayLabels, myArrayData, 2), null, 2))
