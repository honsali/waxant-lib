import Icon from '@ant-design/icons';

const TargetIcon = ({ couleur }) => {
    return (
        <Icon
            component={() => (
                <svg width="24px" height="24px" viewBox="0 0 90 90" fillRule="evenodd" clipRule="evenodd" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality">
                    <circle r="39" cx="45" cy="45" stroke={couleur} strokeWidth={6} fill="none" />
                    <circle r="28" cx="45" cy="45" stroke={couleur} strokeWidth={4} fill="none" />
                    <circle r="16" cx="45" cy="45" fill={couleur} />
                </svg>
            )}
        />
    );
};

export default TargetIcon;
