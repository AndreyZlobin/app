import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import {useState} from "react";

type ModalState ={email: string, password: string}

type AuthModalProps = {
    isOpen: boolean;
    onClose(): void;
    onSubmit(data: ModalState): void;
}

export function AuthModal({isOpen,onSubmit, onClose}: AuthModalProps) {
    const [state, setState] = useState<ModalState>({email: '', password: ''})

    return (
        <React.Fragment>
            <Modal
                open={isOpen}
                onClose={onClose}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        minWidth: 400,
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                >
                    <ModalClose
                        variant="outlined"
                    />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                    >
                        Авторизация
                    </Typography>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            onSubmit(state)
                            console.log(state)
                            setState(_ => ({email: '', password: ''}))
                        }}
                    >
                        <Stack spacing={1}>
                            <Input placeholder="Email" required  value={state.email}  onChange={(event) => {
                                setState(prev => ({...prev, email: event.target.value}))
                            }}/>
                            <Input placeholder="Password" type='password' value={state.password} onChange={(event) => {
                                setState(prev => ({...prev, password: event.target.value}))
                            }} />
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </form>
                </Sheet>
            </Modal>
        </React.Fragment>
    )
}