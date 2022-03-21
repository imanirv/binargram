import { Provider } from "react-redux";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import store from '../../../redux/store';

import UploadContainer from '../upload';

jest.mock("next/router", () =>({
    useRouter() {
        return {
            route:"/",
            pathname: "",
            query: "",
            asPath: "",
            push: jest.fn()
        }
    }
}))

const RootComponent = ({children}) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

describe('upload testing', () => {
    beforeEach(() =>{
        render(<UploadContainer />, {wrapper: RootComponent})
    })

    test('melakukan input title pada form upload', () => {
        userEvent.type(screen.getByTestId('input-title'), "ini title");
        expect(screen.getByTestId('input-title')).toHaveValue("ini title");
    })
    test('melakukan input caption pada form upload', () => {
        userEvent.type(screen.getByTestId('input-caption'), "ini caption");
        expect(screen.getByTestId('input-caption')).toHaveValue("ini caption");
    })

    test('error pada input title', async () => {
        const inputTitle = screen.getByTestId('input-title');
        userEvent.type(inputTitle, "a{backspace}");
        userEvent.tab();
        await waitFor(() => expect(screen.getByTestId("error-title")).toBeInTheDocument())
    });
    test('error pada input pasword', async () => {
        const inputCaption = screen.getByTestId('input-caption');
        userEvent.type(inputCaption, "a{backspace}");
        userEvent.tab();
        await waitFor(() => expect(screen.getByTestId("error-caption")).toBeInTheDocument())
    });
})