import type { Meta, StoryObj } from '@storybook/react'

import LoginLayout from './LoginLayout'

const meta: Meta<typeof LoginLayout> = {
  component: LoginLayout,
}

export default meta

type Story = StoryObj<typeof LoginLayout>

export const Primary: Story = {}
