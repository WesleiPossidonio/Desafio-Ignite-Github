import styled from 'styled-components'

interface RegularTextProps {
  size?: 's' | 'm' | 'l'
  color?: 'text' | 'span'
  weight?: string | number
}

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
  font-size: ${({ theme, size }) =>
    theme.fontsSises[`text-regular-${size ?? 's'}`]};
  line-height: 160%;
  font-weight: ${({ weight }) => weight ?? 400};
`

interface SubtitleProps {
  size?: 's' | 'm'
  color?: 'subtitle'
  weight?: number | string
}

export const Subtitle = styled.h2<SubtitleProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'subtitle'}`]};
  font-size: ${({ theme, size }) =>
    theme.fontsSises[`subtitle-text-${size ?? 's'}`]};
  line-height: 160%;
  font-weight: ${({ weight }) => weight ?? '400'};
`

interface TitleProps {
  size?: 's' | 'm'
  color?: 'title'
  weight?: string | number
  lineHeight?: '160' | '130'
}

export const Title = styled.h1<TitleProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-size: ${({ theme, size }) =>
    theme.fontsSises[`title-text-regular-${size ?? 's'}`]};
  line-height: ${({ lineHeight }) => `${lineHeight}%`};
  font-weight: ${({ weight }) => weight ?? 700};
`
