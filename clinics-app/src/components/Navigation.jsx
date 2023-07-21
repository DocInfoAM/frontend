import classes from "../styles/Navigation.module.css"

const Navigation = () => {
    return (
        <nav className={classes.nav}>
          <a id="point1" href="##"><div className={classes.point}>Point 1</div></a>
          <a id="point2" href="##"><div className={classes.point}>Point 2</div></a>
          <a id="point3" href="##"><div className={classes.point}>Point 3</div></a>
          <a id="point4" href="##"><div className={classes.point}>Point 4</div></a>
          <a id="point5" href="##"><div className={classes.point}>Point 5</div></a>
        </nav>
    )
}

export default Navigation 