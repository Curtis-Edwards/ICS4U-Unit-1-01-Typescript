/**
 * The program shows how to many logs can fit
 *   on a truck given the length of the logs.
 *
 * By:      Curtis Edwards
 * Version: 1.0
 * Since:   2024-02-15
 */

import { createPrompt } from 'bun-promptx'

const lengthString = createPrompt('What length do you want your logs to be?(0.25, 0.5, 1): ')
let lengthNumber = parseInt(lengthString.value)
let numberOfLogs = 1100 / (20 / lengthNumber)
console.log('The truck can carry ${numberOfLogs} logs if they are ${lengthNumber}m long')



console.log('\nDone.')
