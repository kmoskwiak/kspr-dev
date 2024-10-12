import type { Meta, StoryObj } from '@storybook/react';
import { ArticleBody } from './ArticleBody';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/ArticleBody',
  component: ArticleBody,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: [],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof ArticleBody>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    body: `
    <h2>Introduction</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <em>Ut enim ad minim veniam</em>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <strong>Duis aute irure dolor in reprehenderit</strong> in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>A list</p>
<ol>
<li>item one</li>
<li>item two</li>
<li>item 3</li>
</ol>
<p>Duis aute irure dolor in<span style="text-decoration: underline;"> reprehenderit in voluptate velit</span> esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>A list</p>
<ul>
<li>item one</li>
<li>item two</li>
<li>item 3</li>
</ul>
<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <s>nisi ut aliquip ex ea commodo consequat.</s></p>
<blockquote>
<p>nostrud exercitation ullamco laboris</p>
</blockquote>
<hr>
<table style="border-collapse: collapse; width: 100%;" border="1"><colgroup><col style="width: 24.933%;"><col style="width: 24.933%;"><col style="width: 24.933%;"><col style="width: 24.933%;"></colgroup>
<tbody>
<tr>
<td>A table</td>
<td>one</td>
<td>two</td>
<td>three</td>
</tr>
<tr>
<td>1</td>
<td>some text</td>
<td>23</td>
<td>n/p</td>
</tr>
<tr>
<td>2</td>
<td>1</td>
<td>two&nbsp;</td>
<td>nothign</td>
</tr>
</tbody>
</table>
<p style="padding-left: 40px;">Duis aute irure dolor in<span style="text-decoration: underline;"> reprehenderit in voluptate velit</span> esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Just a line.</p>
<pre>window.text = 1
</pre>
<p>&nbsp;</p>
    `
  },
};


export const Markdown: Story = {
  args: {
    bodyMd: `
## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

\`\`\`js
window.code = true;
<div>
  test
</div >

\`\`\`

A list

item one
item two
item 3

![](https://cms.kspr.dev/assets/a708857f-2cdc-4210-856b-5766639f75b3)

A custom component

![](component/CTA?theme=light&text=Click%20me&url=https://kspr.dev)


Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

A list

item one
item two
item 3

> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

nostrud exercitation ullamco laboris

A table	one	two	three
1	some text	23	n/p
2	1	two 	nothign

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Just a line.

\`window.text = 1asdasd\`
 
sdasd

asd

Text
    `
  },
};
