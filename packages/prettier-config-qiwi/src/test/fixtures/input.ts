// @ts-nocheck

import index from '../index'
import { resolve } from 'node:path';
import { useState } from 'react';
import { Box, Flex, Heading, Caption, Paragraph, Text, TextField } from "@qiwi/pijma"
import { Button } from "@pijma/button"
import * as config from 'eslint-config-qiwi'

const a =    {
  "foo": 1,
  'bar': 2
}

function foo (a,b,c,) {
  return [
    a,b,
    c
  ]
}

const bar = foo(1,2,3,)

const baz = {foo, bar}
