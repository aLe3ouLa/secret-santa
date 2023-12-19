// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
  args: {
    avatar: 'images/avatar-01.png',
    indicator: 'success',
  },
}

export const Letter: Story = {
  args: {
    letter: 'A',
  },
}

export const IconButton: Story = {
  args: {
    icon: 'eyeClosed',
  },
}

export const IconButtonWithSantaHat: Story = {
  args: {
    icon: 'eyeClosed',
    isSantaHatShowing: true,
  },
}

export const AvatarWithSuccess: Story = {
  args: {
    avatar: 'images/avatar-01.png',
    indicator: 'success',
  },
}

export const AvatarWithWarning: Story = {
  args: {
    avatar: 'images/avatar-01.png',
    indicator: 'warning',
  },
}

export const AvatarWithError: Story = {
  args: {
    avatar: 'images/avatar-01.png',
    indicator: 'error',
  },
}

export const AvatarWithErrorAndHat: Story = {
  args: {
    avatar: 'images/avatar-01.png',
    indicator: 'error',
    isSantaHatShowing: true,
  },
}
