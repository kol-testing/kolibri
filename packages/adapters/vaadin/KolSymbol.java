package de.itzbund.oss.kolibri.components;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.dependency.NpmPackage;

/**
 * Die **Symbol**-Komponente ermöglicht das Rendern beliebiger Symbole mit steuerbarer Ausgabe durch den Screenreader.
 */

@Tag("kol-symbol")
@NpmPackage(value = "@public-ui/components", version = "1.6.0-rc.1")
@JsModule("@public-ui/components/dist/components/kol-symbol")
public class KolSymbol extends Component {
	/**
	 * Gibt an, was der Screenreader ausgeben soll
	 *
	 * @param value String
	 */
	public void setAriaLabel(final Optional<String> value) {
		getElement().setProperty("_aria-label", value);
	}

	/**
	 * Gibt an, was der Screenreader ausgeben soll
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getAriaLabel() {
		return getElement().getProperty("_aria-label", null);
	}

	/**
	 * Dieses Property gibt den String an der angezeigt werden soll.
	 *
	 * @param value String
	 */
	public void setSymbol(final Optional<String> value) {
		getElement().setProperty("_symbol", value);
	}

	/**
	 * Dieses Property gibt den String an der angezeigt werden soll.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getSymbol() {
		return getElement().getProperty("_symbol", null);
	}
}
