import React from 'react';

// Hand-drawn electric blue orbit ring
export function DoodleOrbit({ className = "w-64 h-32" }) {
  return (
    <svg
      viewBox="0 0 260 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none text-doodle-blue ${className}`}
    >
      <ellipse
        cx="130"
        cy="60"
        rx="120"
        ry="45"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 2"
        transform="rotate(-12 130 60)"
        strokeLinecap="round"
        className="opacity-90"
      />
      {/* Little satellite star on the orbit */}
      <circle cx="230" cy="40" r="3" fill="currentColor" />
      <circle cx="35" cy="80" r="2.5" fill="currentColor" />
    </svg>
  );
}

// Exact 1:1 Authentic Thin Pastel Doodle Orbit loops from Dribbble reference
export function DoodleAuthenticOrbits({ className = "w-full h-full", strokeWidth = 1.8 }) {
  return (
    <svg
      viewBox="0 0 460 461"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"pointer-events-none " + className}
    >
      <path
        d="M 312.0,142.0 L 312.9,141.9 L 313.9,141.8 L 315.2,141.7 L 316.6,141.5 L 318.1,141.3 L 319.7,141.2 L 321.4,141.0 L 323.1,140.8 L 324.9,140.6 L 326.7,140.4 L 328.5,140.3 L 330.2,140.2 L 331.9,140.1 L 333.5,140.0 L 335.0,140.0 L 336.4,140.0 L 337.9,140.0 L 339.3,140.0 L 340.7,140.0 L 342.1,140.0 L 343.6,140.0 L 344.9,140.0 L 346.3,140.1 L 347.6,140.2 L 349.0,140.4 L 350.2,140.6 L 351.5,140.8 L 352.7,141.2 L 353.9,141.5 L 355.0,142.0 L 356.1,142.5 L 357.2,143.2 L 358.2,143.8 L 359.2,144.6 L 360.2,145.4 L 361.1,146.2 L 362.1,147.1 L 362.9,148.0 L 363.8,149.0 L 364.6,150.0 L 365.4,151.0 L 366.1,152.0 L 366.8,153.0 L 367.4,154.0 L 368.0,155.0 L 368.6,156.0 L 369.1,157.0 L 369.6,158.0 L 370.0,159.1 L 370.4,160.1 L 370.8,161.2 L 371.2,162.3 L 371.5,163.4 L 371.7,164.6 L 371.9,165.7 L 372.0,166.9 L 372.1,168.2 L 372.1,169.4 L 372.1,170.7 L 372.0,172.0 L 371.8,173.3 L 371.6,174.7 L 371.3,176.1 L 371.0,177.5 L 370.6,179.0 L 370.2,180.4 L 369.7,181.9 L 369.2,183.5 L 368.6,185.0 L 367.9,186.6 L 367.2,188.2 L 366.5,189.9 L 365.7,191.5 L 364.9,193.3 L 364.0,195.0 L 363.1,196.8 L 362.1,198.7 L 361.0,200.6 L 359.9,202.6 L 358.8,204.7 L 357.6,206.7 L 356.3,208.8 L 355.0,210.9 L 353.7,213.0 L 352.3,215.1 L 350.9,217.2 L 349.5,219.2 L 348.0,221.2 L 346.5,223.1 L 345.0,225.0 L 343.5,226.8 L 341.9,228.6 L 340.3,230.4 L 338.7,232.2 L 337.0,234.0 L 335.3,235.7 L 333.6,237.4 L 331.8,239.1 L 330.0,240.7 L 328.1,242.4 L 326.2,244.0 L 324.2,245.5 L 322.2,247.1 L 320.1,248.5 L 318.0,250.0 L 315.8,251.4 L 313.5,252.8 L 311.2,254.1 L 308.8,255.3 L 306.4,256.6 L 303.9,257.8 L 301.4,258.9 L 298.8,260.1 L 296.2,261.2 L 293.6,262.3 L 290.9,263.5 L 288.2,264.6 L 285.5,265.7 L 282.8,266.8 L 280.0,268.0 L 277.2,269.2 L 274.4,270.3 L 271.4,271.5 L 268.5,272.7 L 265.5,273.8 L 262.5,275.0 L 259.5,276.1 L 256.4,277.3 L 253.3,278.4 L 250.3,279.5 L 247.2,280.6 L 244.1,281.7 L 241.1,282.8 L 238.0,283.9 L 235.0,285.0 L 232.0,286.1 L 229.0,287.1 L 226.0,288.1 L 223.0,289.2 L 220.0,290.2 L 217.0,291.2 L 214.0,292.2 L 211.0,293.2 L 208.0,294.2 L 205.0,295.1 L 202.0,296.1 L 199.0,297.1 L 196.0,298.1 L 193.0,299.0 L 190.0,300.0 L 187.0,301.0 L 184.0,302.0 L 180.9,303.0 L 177.9,304.0 L 174.8,305.0 L 171.8,306.1 L 168.7,307.1 L 165.7,308.1 L 162.6,309.0 L 159.6,310.0 L 156.6,310.9 L 153.7,311.7 L 150.7,312.5 L 147.9,313.3 L 145.0,314.0 L 142.2,314.6 L 139.4,315.2 L 136.6,315.8 L 133.8,316.3 L 131.1,316.7 L 128.4,317.2 L 125.7,317.6 L 123.0,317.9 L 120.4,318.3 L 117.8,318.6 L 115.2,318.9 L 112.6,319.2 L 110.0,319.5 L 107.5,319.7 L 105.0,320.0 L 102.5,320.2 L 100.0,320.5 L 97.5,320.6 L 95.0,320.8 L 92.5,320.9 L 90.0,321.0 L 87.6,321.1 L 85.2,321.2 L 82.8,321.2 L 80.5,321.3 L 78.3,321.4 L 76.1,321.5 L 74.0,321.7 L 71.9,321.8 L 70.0,322.0 L 68.1,322.2 L 66.3,322.4 L 64.6,322.6 L 62.9,322.8 L 61.3,323.0 L 59.8,323.2 L 58.3,323.4 L 56.8,323.7 L 55.5,323.9 L 54.1,324.2 L 52.8,324.5 L 51.6,324.8 L 50.3,325.2 L 49.1,325.6 L 48.0,326.0 L 46.9,326.5 L 45.8,326.9 L 44.7,327.5 L 43.6,328.0 L 42.6,328.6 L 41.6,329.2 L 40.7,329.9 L 39.8,330.5 L 39.0,331.2 L 38.3,331.8 L 37.6,332.5 L 37.1,333.1 L 36.6,333.8 L 36.3,334.4 L 36.0,335.0 L 35.9,335.6 L 35.8,336.3 L 35.9,336.9 L 36.0,337.6 L 36.2,338.3 L 36.5,339.0 L 36.9,339.7 L 37.4,340.3 L 37.9,341.0 L 38.4,341.6 L 39.1,342.2 L 39.7,342.7 L 40.5,343.2 L 41.2,343.6 L 42.0,344.0 L 42.8,344.3 L 43.7,344.6 L 44.6,344.8 L 45.6,344.9 L 46.7,345.1 L 47.8,345.2 L 48.9,345.2 L 50.1,345.3 L 51.4,345.3 L 52.7,345.3 L 54.0,345.2 L 55.4,345.2 L 56.9,345.1 L 58.4,345.1 L 60.0,345.0 L 61.6,344.9 L 63.3,344.9 L 65.0,344.8 L 66.7,344.7 L 68.6,344.6 L 70.4,344.5 L 72.3,344.4 L 74.3,344.2 L 76.3,344.0 L 78.4,343.8 L 80.6,343.5 L 82.8,343.2 L 85.2,342.9 L 87.5,342.5 L 90.0,342.0 L 92.6,341.5 L 95.2,340.9 L 98.0,340.2 L 100.9,339.5 L 103.9,338.8 L 106.9,338.0 L 110.0,337.2 L 113.1,336.3 L 116.3,335.4 L 119.4,334.6 L 122.6,333.6 L 125.8,332.7 L 128.9,331.8 L 132.0,330.9 L 135.0,330.0 L 138.0,329.1 L 141.0,328.2 L 143.9,327.3 L 146.9,326.3 L 149.8,325.4 L 152.8,324.5 L 155.7,323.5 L 158.7,322.5 L 161.6,321.5 L 164.6,320.5 L 167.6,319.4 L 170.7,318.4 L 173.7,317.3 L 176.9,316.2 L 180.0,315.0 L 183.2,313.8 L 186.4,312.6 L 189.7,311.3 L 193.0,310.0 L 196.3,308.7 L 199.6,307.4 L 203.0,306.0 L 206.4,304.6 L 209.8,303.2 L 213.1,301.9 L 216.5,300.5 L 219.9,299.1 L 223.3,297.7 L 226.7,296.3 L 230.0,295.0 L 233.3,293.7 L 236.7,292.4 L 240.1,291.2 L 243.5,289.9 L 246.9,288.7 L 250.2,287.5 L 253.6,286.2 L 257.0,285.0 L 260.4,283.7 L 263.7,282.4 L 267.0,281.1 L 270.3,279.6 L 273.6,278.2 L 276.8,276.6 L 280.0,275.0 L 283.2,273.3 L 286.4,271.5 L 289.6,269.6 L 292.8,267.7 L 296.0,265.7 L 299.2,263.7 L 302.4,261.7 L 305.5,259.6 L 308.5,257.5 L 311.5,255.4 L 314.4,253.3 L 317.2,251.2 L 319.9,249.1 L 322.5,247.0 L 325.0,245.0 L 327.3,243.0 L 329.6,241.0 L 331.8,239.0 L 333.8,237.0 L 335.8,235.0 L 337.7,233.0 L 339.5,231.0 L 341.3,229.0 L 343.0,227.0 L 344.6,225.0 L 346.2,223.0 L 347.7,221.0 L 349.2,219.0 L 350.6,217.0 L 352.0,215.0 L 353.4,213.0 L 354.7,210.9 L 356.0,208.8 L 357.2,206.7 L 358.4,204.6 L 359.6,202.5 L 360.7,200.4 L 361.7,198.3 L 362.6,196.3 L 363.4,194.3 L 364.2,192.3 L 364.8,190.4 L 365.3,188.5 L 365.7,186.7 L 366.0,185.0 L 366.1,183.3 L 366.1,181.7 L 365.9,180.2 L 365.7,178.6 L 365.3,177.1 L 364.8,175.7 L 364.2,174.2 L 363.5,172.9 L 362.8,171.6 L 362.1,170.3 L 361.3,169.1 L 360.5,168.0 L 359.6,166.9 L 358.8,165.9 L 358.0,165.0 L 357.2,164.1 L 356.4,163.3 L 355.5,162.6 L 354.7,161.9 L 353.8,161.3 L 352.8,160.7 L 351.9,160.2 L 350.9,159.7 L 349.8,159.3 L 348.7,159.0 L 347.5,158.7 L 346.2,158.4 L 344.9,158.2 L 343.5,158.1 L 342.0,158.0 L 340.3,158.0 L 338.5,158.1 L 336.4,158.3 L 334.2,158.6 L 331.9,159.0 L 329.6,159.4 L 327.2,159.8 L 324.8,160.3 L 322.5,160.8 L 320.3,161.3 L 318.2,161.7 L 316.3,162.1 L 314.6,162.5 L 313.2,162.8 L 312,163"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 38.0,245.0 L 38.6,244.8 L 39.3,244.5 L 40.1,244.1 L 41.0,243.7 L 41.9,243.2 L 43.0,242.7 L 44.1,242.2 L 45.2,241.8 L 46.4,241.3 L 47.7,240.9 L 49.1,240.5 L 50.5,240.2 L 52.0,240.1 L 53.5,240.0 L 55.0,240.0 L 56.6,240.1 L 58.2,240.3 L 59.9,240.6 L 61.7,241.0 L 63.5,241.4 L 65.3,241.8 L 67.3,242.3 L 69.2,242.9 L 71.3,243.5 L 73.4,244.2 L 75.6,244.9 L 77.8,245.6 L 80.1,246.4 L 82.5,247.2 L 85.0,248.0 L 87.5,248.9 L 90.2,249.8 L 92.9,250.8 L 95.7,251.9 L 98.5,253.0 L 101.4,254.2 L 104.4,255.3 L 107.5,256.5 L 110.6,257.8 L 113.7,259.0 L 116.9,260.2 L 120.1,261.5 L 123.4,262.7 L 126.7,263.8 L 130.0,265.0 L 133.4,266.1 L 136.8,267.3 L 140.3,268.4 L 143.8,269.6 L 147.4,270.7 L 151.0,271.8 L 154.7,273.0 L 158.4,274.1 L 162.2,275.3 L 165.9,276.4 L 169.7,277.5 L 173.5,278.7 L 177.3,279.8 L 181.2,280.9 L 185.0,282.0 L 188.9,283.1 L 192.8,284.2 L 196.8,285.2 L 200.8,286.3 L 204.8,287.4 L 208.9,288.4 L 213.0,289.5 L 217.0,290.5 L 221.1,291.6 L 225.2,292.6 L 229.2,293.7 L 233.2,294.8 L 237.2,295.8 L 241.1,296.9 L 245.0,298.0 L 248.8,299.1 L 252.7,300.2 L 256.5,301.3 L 260.3,302.4 L 264.1,303.5 L 267.8,304.6 L 271.6,305.7 L 275.3,306.8 L 279.0,307.9 L 282.6,309.1 L 286.2,310.2 L 289.7,311.4 L 293.2,312.6 L 296.6,313.8 L 300.0,315.0 L 303.3,316.2 L 306.6,317.5 L 309.9,318.8 L 313.1,320.1 L 316.3,321.4 L 319.4,322.8 L 322.5,324.1 L 325.6,325.5 L 328.6,326.9 L 331.5,328.2 L 334.3,329.6 L 337.1,331.0 L 339.8,332.3 L 342.5,333.7 L 345.0,335.0 L 347.5,336.3 L 349.9,337.7 L 352.3,339.1 L 354.6,340.5 L 356.9,341.9 L 359.0,343.3 L 361.2,344.7 L 363.2,346.1 L 365.2,347.5 L 367.0,348.9 L 368.8,350.2 L 370.5,351.4 L 372.1,352.7 L 373.6,353.9 L 375.0,355.0 L 376.3,356.1 L 377.5,357.2 L 378.6,358.2 L 379.5,359.2 L 380.4,360.2 L 381.3,361.1 L 382.0,362.1 L 382.6,362.9 L 383.2,363.8 L 383.7,364.6 L 384.1,365.4 L 384.4,366.1 L 384.7,366.8 L 384.9,367.4 L 385.0,368.0 L 385.1,368.5 L 385.1,369.0 L 385.0,369.5 L 384.9,369.9 L 384.7,370.3 L 384.4,370.6 L 384.1,370.9 L 383.6,371.2 L 383.1,371.4 L 382.5,371.6 L 381.8,371.7 L 381.0,371.9 L 380.1,371.9 L 379.1,372.0 L 378.0,372.0 L 376.8,372.0 L 375.4,371.9 L 374.0,371.7 L 372.5,371.6 L 370.9,371.3 L 369.1,371.1 L 367.3,370.8 L 365.4,370.5 L 363.4,370.1 L 361.4,369.8 L 359.2,369.4 L 357.0,369.1 L 354.7,368.7 L 352.4,368.3 L 350.0,368.0 L 347.5,367.7 L 344.9,367.3 L 342.2,367.0 L 339.5,366.6 L 336.6,366.3 L 333.7,365.9 L 330.7,365.6 L 327.7,365.2 L 324.5,364.8 L 321.4,364.4 L 318.2,363.9 L 314.9,363.5 L 311.6,363.0 L 308.3,362.5 L 305.0,362.0 L 301.6,361.4 L 298.2,360.9 L 294.7,360.3 L 291.2,359.6 L 287.6,359.0 L 284.0,358.3 L 280.3,357.6 L 276.6,356.9 L 272.8,356.2 L 269.1,355.5 L 265.3,354.8 L 261.5,354.1 L 257.7,353.4 L 253.8,352.7 L 250.0,352.0 L 246.1,351.3 L 242.2,350.7 L 238.2,350.0 L 234.2,349.3 L 230.2,348.7 L 226.1,348.0 L 222.0,347.3 L 218.0,346.7 L 213.9,346.0 L 209.8,345.3 L 205.8,344.7 L 201.8,344.0 L 197.8,343.3 L 193.9,342.7 L 190.0,342.0 L 186.2,341.3 L 182.4,340.7 L 178.7,340.1 L 175.0,339.5 L 171.3,338.9 L 167.6,338.3 L 164.0,337.7 L 160.4,337.1 L 156.8,336.5 L 153.1,335.9 L 149.5,335.2 L 145.9,334.4 L 142.3,333.7 L 138.7,332.9 L 135.0,332.0 L 131.3,331.1 L 127.5,330.1 L 123.6,329.1 L 119.7,328.0 L 115.8,327.0 L 111.9,325.8 L 108.0,324.7 L 104.1,323.5 L 100.3,322.4 L 96.6,321.1 L 93.0,319.9 L 89.5,318.7 L 86.2,317.5 L 83.0,316.2 L 80.0,315.0 L 77.2,313.8 L 74.4,312.5 L 71.8,311.2 L 69.2,309.9 L 66.8,308.6 L 64.5,307.2 L 62.3,305.9 L 60.1,304.5 L 58.1,303.1 L 56.2,301.8 L 54.4,300.4 L 52.6,299.0 L 51.0,297.7 L 49.4,296.3 L 48.0,295.0 L 46.7,293.7 L 45.5,292.3 L 44.4,291.0 L 43.4,289.6 L 42.6,288.2 L 41.8,286.9 L 41.2,285.5 L 40.6,284.1 L 40.1,282.8 L 39.6,281.4 L 39.2,280.1 L 38.9,278.8 L 38.6,277.5 L 38.3,276.2 L 38.0,275.0 L 37.8,273.8 L 37.6,272.5 L 37.5,271.3 L 37.4,270.1 L 37.4,268.9 L 37.5,267.6 L 37.6,266.5 L 37.7,265.3 L 37.9,264.2 L 38.1,263.0 L 38.4,262.0 L 38.8,260.9 L 39.1,259.9 L 39.6,258.9 L 40.0,258.0 L 40.5,257.1 L 41.2,256.2 L 42.0,255.4 L 42.8,254.6 L 43.7,253.8 L 44.7,253.0 L 45.6,252.3 L 46.6,251.6 L 47.6,250.9 L 48.5,250.3 L 49.4,249.8 L 50.2,249.2 L 50.9,248.8 L 51.5,248.4 L 52,248"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Hand-drawn double-orbit loops wrapping around lower chest & sides
export function DoodleChestOrbits({ className = "w-full h-auto" }) {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none text-doodle-blue ${className}`}
    >
      <path
        d="M 320,35 C 360,35 375,65 355,100 C 325,145 235,130 150,125 C 80,120 40,105 45,85 C 50,65 85,75 95,95 C 105,115 75,135 40,145 C 15,152 30,175 70,170 C 150,160 260,165 345,160 C 375,158 375,140 345,125 C 290,95 190,115 110,122"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-95"
      />
      <path
        d="M 330,60 C 370,80 375,115 330,145 C 270,185 160,170 85,172 C 45,173 40,155 60,138 C 85,118 135,125 185,128 C 265,134 325,135 355,148"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        className="opacity-90"
      />
    </svg>
  );
}

// Hand-drawn 4-point sparkle star
export function DoodleSparkle({ className = "w-6 h-6", delay = 0 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none text-doodle-blue animate-pulse ${className}`}
      style={{ animationDelay: `${delay}s`, animationDuration: '2.5s' }}
    >
      <path
        d="M12 2C12.5 7.5 16.5 11.5 22 12C16.5 12.5 12.5 16.5 12 22C11.5 16.5 7.5 12.5 2 12C7.5 11.5 11.5 7.5 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Hand-drawn sketched circle / oval badge outline
export function DoodleOval({ className = "w-48 h-12" }) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none text-doodle-blue ${className}`}
    >
      <path
        d="M20,30 C20,12 70,6 105,6 C165,6 195,15 195,30 C195,46 150,54 95,54 C45,54 5,45 8,28 C10,18 45,10 80,8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Hand-drawn curved arrow with arrowhead pointing down/right or customizable
export function DoodleArrow({ className = "w-16 h-16", direction = "down-right" }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none text-doodle-blue ${className}`}
    >
      <path
        d="M15,15 C25,35 45,55 65,60"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M52,50 L66,61 L64,44"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Hand-drawn curly pointer arrow pointing to the QR code / card
export function DoodleCurlyArrow({ className = "w-20 h-20" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none text-doodle-blue ${className}`}
    >
      <path
        d="M80,15 C60,5 30,20 35,45 C40,65 65,60 55,80 C50,90 40,92 25,85"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M32,73 L23,86 L38,92"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Hand-drawn wavy underline
export function DoodleUnderline({ className = "w-32 h-4" }) {
  return (
    <svg
      viewBox="0 0 160 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none text-doodle-blue ${className}`}
    >
      <path
        d="M3,12 C25,5 50,17 75,10 C100,3 125,16 155,9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Hand-drawn circular spiral stamp
export function DoodleSpiral({ className = "w-10 h-10" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none text-doodle-blue ${className}`}
    >
      <path
        d="M20,20 C22,18 24,20 23,22 C21,25 16,23 16,19 C16,14 24,13 26,17 C29,23 23,29 17,28 C9,27 9,14 17,10 C27,6 33,17 31,26 C29,34 16,35 10,29"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Hand-drawn comic thought cloud / speech bubble
export function DoodleBubble({ children, className = "" }) {
  return (
    <div className={`relative px-4 py-2 border-2 border-dashed border-doodle-blue rounded-2xl bg-warm-sand/90 text-doodle-blue font-script text-lg leading-tight shadow-sm ${className}`}>
      {children}
      <div className="absolute -bottom-2 left-6 w-3 h-3 border-r-2 border-b-2 border-dashed border-doodle-blue bg-warm-sand transform rotate-45" />
    </div>
  );
}

// Hand-drawn Musical Notes
export function DoodleMusicNotes({ className = "w-12 h-12" }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none text-doodle-blue ${className}`}
    >
      <path
        d="M15,35 A5,5 0 1,1 10,30 A5,5 0 0,1 15,35 M15,35 L15,15 L32,10 L32,30 M32,30 A5,5 0 1,1 27,25 A5,5 0 0,1 32,30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="11" cy="34" r="3.5" fill="currentColor" />
      <circle cx="28" cy="29" r="3.5" fill="currentColor" />
    </svg>
  );
}

// Hand-drawn Fun Fact Icons
export function GuitarDoodle({ className = "w-14 h-14" }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-white/80 group-hover:text-doodle-blue transition-colors ${className}`}
    >
      {/* Acoustic guitar body */}
      <path
        d="M25,50 C18,44 18,32 26,26 C33,20 38,25 44,22 C50,18 55,8 65,14 C73,20 68,32 62,38 C56,44 58,49 52,56 C46,63 33,60 25,50 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="42" cy="38" r="6" stroke="currentColor" strokeWidth="1.6" />
      {/* Guitar neck */}
      <path d="M58,20 L74,6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Pegs */}
      <path d="M71,4 L77,8 M74,7 L79,11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CoffeeDoodle({ className = "w-14 h-14" }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-white/80 group-hover:text-doodle-blue transition-colors ${className}`}
    >
      {/* Cup body */}
      <path
        d="M20,32 L24,62 C25,66 30,68 40,68 C50,68 55,66 56,62 L60,32 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Cup handle */}
      <path
        d="M59,38 C67,38 70,44 70,48 C70,54 64,56 57,56"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Steam lines */}
      <path
        d="M30,24 C28,18 34,14 31,8 M40,24 C38,16 44,12 41,6 M50,24 C48,18 54,14 51,8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <line x1="16" y1="72" x2="64" y2="72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ControllerDoodle({ className = "w-14 h-14" }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-white/80 group-hover:text-doodle-blue transition-colors ${className}`}
    >
      {/* Controller body */}
      <path
        d="M22,58 C16,56 12,46 14,34 C16,24 26,22 40,22 C54,22 64,24 66,34 C68,46 64,56 58,58 C52,60 48,50 40,50 C32,50 28,60 22,58 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* D-Pad */}
      <path d="M26,32 L26,42 M21,37 L31,37" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Buttons */}
      <circle cx="51" cy="34" r="2" fill="currentColor" />
      <circle cx="57" cy="40" r="2" fill="currentColor" />
      <circle cx="49" cy="42" r="2" fill="currentColor" />
      <circle cx="55" cy="32" r="2" fill="currentColor" />
    </svg>
  );
}

export function BooksDoodle({ className = "w-14 h-14" }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-white/80 group-hover:text-doodle-blue transition-colors ${className}`}
    >
      {/* Bottom book */}
      <path d="M16,56 L64,56 L62,66 L14,66 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14,66 C14,61 16,56 16,56" stroke="currentColor" strokeWidth="2" />
      {/* Middle book */}
      <path d="M20,44 L66,44 L64,54 L18,54 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* Top book */}
      <path d="M22,32 L60,32 L58,42 L20,42 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* Bookmark ribbon */}
      <path d="M38,32 L38,24 L42,27 L46,24 L46,32" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

// Retro Workstation Illustration with CRT / terminal and hardware details
export function RetroWorkstation({ className = "w-full max-w-sm" }) {
  return (
    <div className={`relative bg-warm-sand-dark/40 p-4 rounded-2xl border border-warm-border/60 ${className}`}>
      <svg
        viewBox="0 0 240 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto text-charcoal"
      >
        {/* Monitor casing */}
        <rect x="40" y="20" width="160" height="110" rx="10" stroke="currentColor" strokeWidth="3" fill="#E6E0D6" />
        {/* Screen inset */}
        <rect x="52" y="32" width="136" height="86" rx="6" fill="#222225" />
        {/* Code / Terminal lines on screen */}
        <line x1="62" y1="46" x2="110" y2="46" stroke="#3D68FF" strokeWidth="3" strokeLinecap="round" />
        <line x1="62" y1="58" x2="150" y2="58" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" className="opacity-80" />
        <line x1="62" y1="68" x2="135" y2="68" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" className="opacity-80" />
        <line x1="62" y1="78" x2="160" y2="78" stroke="#3D68FF" strokeWidth="2" strokeLinecap="round" className="opacity-90" />
        <line x1="62" y1="88" x2="120" y2="88" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" className="opacity-60" />
        <circle cx="166" cy="100" r="3" fill="#3D68FF" />
        {/* Monitor Stand */}
        <path d="M105,130 L95,150 L145,150 L135,130 Z" fill="#D3CBBB" stroke="currentColor" strokeWidth="2.5" />
        <rect x="80" y="150" width="80" height="8" rx="3" fill="#C5BCAB" stroke="currentColor" strokeWidth="2" />
        {/* Floppy drive slot */}
        <rect x="150" y="118" width="36" height="4" rx="1" fill="currentColor" />
        {/* Power LED */}
        <circle cx="178" cy="125" r="2" fill="#3D68FF" />
      </svg>
      {/* Hand-drawn blue annotations around workstation */}
      <DoodleOrbit className="absolute -top-4 -left-6 w-full h-full text-doodle-blue pointer-events-none scale-110" />
      <span className="absolute -top-2 right-4 font-script text-doodle-blue text-sm">spring boot &amp; core</span>
      <span className="absolute -bottom-3 left-4 font-script text-doodle-blue text-sm">clean microservices</span>
    </div>
  );
}

// Brand Icons
export function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}
