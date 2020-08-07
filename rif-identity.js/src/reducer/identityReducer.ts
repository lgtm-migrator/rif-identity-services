import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IdentityState {
  identities: string[]
}

interface AddIdentityPayload {
  did: string
}

const initialState: IdentityState = {
  identities: []
}

const identitySlice = createSlice({
  name: 'identity',
  initialState,
  reducers: {
    addIdentity(state: IdentityState, { payload }: PayloadAction<AddIdentityPayload>) {
      state.identities.push(payload.did)
    }
  }
})

export const { addIdentity } = identitySlice.actions

export const selectIdentities = (state: IdentityState) => state.identities

export default identitySlice.reducer
