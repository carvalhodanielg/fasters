import { ReactNode } from "react"
import * as S from "./ButtonStyle"

type Props = {
    children?: React.ReactNode;
    banner?: boolean;
}

export const Button: React.FC<Props> = ({children, banner=false}) => { 
    return(
        <S.Button status={banner}>
            {children}
        </S.Button>
    )
}